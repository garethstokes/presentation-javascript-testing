/*jshint node:true */

module.exports = function(grunt) {

  "use strict";

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    src: ['src/*.js'],
    lib: ['lib/*.js'],

    jshint: {
      options: {
        curly: false,

        eqeqeq: true,
        forin: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        noempty: true,
        nonew: true,
        plusplus: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {},
      all: ['Gruntfile.js', 'src/*.js']
    },

    jasmine : {
      src : 'src/*.js',
      options : {
        specs : 'spec/*.js'
      }
    },

    'jasmine-server': {
      browser: true
    },

    clean: ['js/*.js'],

    concat: {
      all: {
        options: { stripBanners: false },
        src: [
          'src/*.js',
          'lib/*.js'
        ],
        dest: 'js/presentation.js'
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/*.js',
        dest: 'js/presentation.min.js'
      }
    },

    connect: {
      server: {
        options: {
          port: 8080
        }
      }
    },

    watch: {
      files: [
        'src/*.js',
        'Gruntfile.js'
      ],
      tasks: ['default']
    },

    copy: { 
      versioned: {
        files: {
          'js/presentation-<%= pkg.version %>.min.js': 'js/presentation.min.js'
        }
      }
    }

  });

  /* we need these tasks to do the job */
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  /* run these from the console, yo */
  grunt.registerTask('default', ['jshint', 'jasmine', 'clean', 'concat', 'uglify', 'copy:versioned']);
  grunt.registerTask('dev', ['default', 'connect', 'watch']); 
};
