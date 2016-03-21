module.exports = function(grunt) {
grunt.initConfig({
  concat: {
    app: {
      src: ['app/*/*.js', 'app/*/*/*.js'],
      dest: 'app/app.js'
    },
    external: {
      src: ['external/*/*.js'],
      dest: 'external/external.js'
    }
  },
  uglify: {
    options: {
      sourceMap: true,
      beautify: true,
      compress: {
        drop_console: true
      }
    },
    app: {
      files: {
        'app/app.min.js': ['app/app.js']
      }
    },
    external: {
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
  watch: {
    develop: {
      files: ['app/*/**.js', 'app/*/*/*.js'],
      tasks: ['concat:app', 'babel']
    }
  }
});

grunt.registerTask('build', ['concat:app', 'babel', 'concat:external', 'uglify:app', 'uglify:external', 'copy']);

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-babel');
}
