module.exports = function(grunt) {
  grunt.initConfig ({
     watch: {
        source: {
          files: ['themes/default/public/scss/**/*.scss'],
          tasks: ['sass'],
          options: {
            livereload: true, // needed to run LiveReload
          }
        }
    }, 
    sass: {
      dist: {
        files: {
          'themes/default/public/css/main.css' : 'themes/default/public/scss/main.scss'
        }
      }
    }      
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch']);

};