module.exports = function(grunt) {
grunt.initConfig({
  concat: {
    app: {
      src: ['app/*/*.js', 'app/**/*.js'],
      dest: 'src/Arvici.app.js'
    },
    external: {
      src: ['lib/jquery/*.js', 'lib/angular/*.js', 'lib/angular-sanitize/*.js', 'lib/angular-ui-router/*.js', 'lib/bootstrap-material-design/*.js'],
      dest: 'src/vendor.js'
    }
  },
  uglify: {
    app: {
      options: {
        sourceMap: true,
        beautify: false,
        compress: {
          drop_console: true
        }
      },
      files: {
        'src/Arvici.app.min.js': ['src/Arvici.app.js']
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
        'src/vendor.min.js': ['src/vendor.js']
      }
    }
  },
  copy: {
    main: {
      files: [{
        expand: true, src: ['src/vendor.min.js'], dest: 'build/'
      },
      {
        expand: true, flatten: true, src: ['src/Arvici.app.min.js', 'src/Arvici.app.min.js.map'], dest: 'assets/js/'
      },
      {
        expand: true, flatten: true, src: ['src/vendor.min.js', 'src/vendor.min.js.map'], dest: 'assets/js/'
      }
    ]}
  },
  babel: {
		options: {
			presets: ['babel-preset-es2015']
		},
		dist: {
			files: {
				'src/Arvici.app.js': 'src/Arvici.app.js'
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
      files: ['app/*/**', 'assets/less/***'],
      tasks: ['concat:app', 'babel', 'uglify:app','less:app']
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
