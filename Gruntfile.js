module.exports = function (grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: "compressed",
        },
        files: {
          "src/styles/pages/home_page.css": "src/styles/pages/home_page.scss",
        },
      },
    },
    watch: {
      sass: {
        files: "src/**/*.scss",
        tasks: ["sass"],
      },
    },
  });

  //Load compiler sass
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");

  //register task to run by grunt
  grunt.registerTask("default", ["watch", "sass"]);
};
