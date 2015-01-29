module.exports = function(grunt) {
  grunt.initConfig ({
    sass: {
      dist: {
        files: {
          'themes/default/public/css/main.css' : 'themes/default/public/scss/main.scss'
        }
      }
    },
      watch: {
        source: {
          files: ['themes/default/public/scss/**/*.scss'],
          tasks: ['sass'],
          options: {
            livereload: true, // needed to run LiveReload
          }
        }
      }

   
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch']);

};