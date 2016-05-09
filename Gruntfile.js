module.exports = function(grunt) {
grunt.initConfig({
  concat: {
    app: {
      src: ['app/*/*.js', 'app/*/*/*.js'],
      dest: 'app/app.js'
    },
    external: {
      src: ['external/jquery/*.js', 'external/angular/*.js', 'external/angular-sanitize/*.js', 'external/angular-ui-router/*.js', 'external/bootstrap-material-design/*.js'],
      dest: 'external/external.js'
    }
  },
  uglify: {
    app: {
      options: {
        sourceMap: true,
        beautify: true,
        compress: {
          drop_console: true
        }
      },
      files: {
        'app/app.min.js': ['app/app.js']
      }
    },
    external: {
      options: {
        sourceMap: true,
        beautify: false,
        compress: {
          drop_console: true
        }
      },
      files: {
        'external/external.min.js': ['external/external.js']
      }
    }
  },
  copy: {
    main: {
      files: [{
        expand: true, src: ['external/external.min.js'], dest: 'build/'
      },
      {
        expand: true, src: ['app/*'], dest: 'src/'
      }
    ]}
  },
  babel: {
		options: {
			presets: ['babel-preset-es2015']
		},
		dist: {
			files: {
				'app/app.js': 'app/app.js'
			}
		}
	},
  less: {
    app: {
      files: {
        'assets/css/style.css': 'assets/less/**.less'
      }
    }
  },
  watch: {
    develop: {
      files: ['app/*/**.js', 'app/*/*/*.js', 'assets/less/**'],
      tasks: ['concat:app', 'babel', 'less:app']
    }
  }
});

grunt.registerTask('build', ['concat:app', 'babel', 'concat:external', 'uglify:app', 'uglify:external', 'copy', 'less:app']);

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-babel');
}
