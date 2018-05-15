/**
 * File Name   : gulpfile
 *
 * Description : 걸프 관련 파일
 *
 * Developer   : circleGiven
 *
 * Date        : 2018. 5. 15.
 */

// 걸프 의존성
const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

// 걸프 작업
gulp.task('default', function() {
    // ESLint 실행
    gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
        .pipe(eslint())
        .pipe(eslint.format());
    // 노드 소스
    gulp.src("es6/**/*.js")         // 변환할 파일 지정
        .pipe(babel())              // 해당 소스파일을 바벨에 연결
        .pipe(gulp.dest("dist"));   // 컴파일된 코드를 저장할 곳 지정
    // 브라우저 소스
    gulp.src("public/es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("public/dist"));
});
