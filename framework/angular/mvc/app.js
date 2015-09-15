/**
 * Created by liurui on 15/8/27.
 */
angular.module('mvc', [])
    .controller('TodoController',  function () {

        this.todos = [
            {text: '准备演示代码'},
            {text: '给大家演示'}
        ];

        this.addTodo = function () {
            this.todos.push({text: this.todoText})
        }

    });