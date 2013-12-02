module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
        options: {
            banner: '/* <%= pkg.name %> v<%= pkg.version %> | ' +
                '(c) <%= grunt.template.today("yyyy") %> <%= pkg.author %> | http://<%= pkg.homepage %>/ */\n',
            preserveComments: false,
            mangle: true
        },
        app_target: {
          files: {
            'build/js/cookmarklet.js': ['src/js/cookmarklet.js'],
            'build/js/driver.js': ['src/js/driver.js'],
            'build/app.js': ['src/app.js']
          }
        }
    },
    cssmin: {
      add_banner: {
        options: {
          banner: '/* <%= pkg.name %> v<%= pkg.version %> | ' +
                '(c) <%= grunt.template.today("yyyy") %> <%= pkg.author %> | http://<%= pkg.homepage %>/ */',
            },
        files: {
          'build/css/cookmarklet.css': ['src/css/cookmarklet.css']
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['Gruntfile.js', 'src/js/*.js']
    },
    connect: {
        server: {
          options: {
            port: 8000,
            base: 'build/',
            keepalive: true
          }
        }
    }
  });

  // Load the Grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-connect');
  // Register the default tasks.
  grunt.registerTask('default', ['uglify', 'cssmin']);
  grunt.registerTask('server', ['connect']);
};