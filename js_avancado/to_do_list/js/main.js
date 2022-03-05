// Main é um objeto.
const Main = {

    tasks:[],

    init: function() {
        this.cacheSelectors()
        this.bindEvents()
        this.getStoraged()
        this.buildTasks()
    },

    cacheSelectors: function(){
        this.$checkButtons = document.querySelectorAll('.check')
        this.$inputTask  = document.querySelector('#inputTask')
        this.$list = document.querySelector('#list')
        this.$removeButtons = document.querySelectorAll('.remove')
    },

    //conectar eventos
    //Toda variável que armazena um elemento html vamos iniciar com um $.
    bindEvents: function(){
        const self = this
        this.$checkButtons.forEach(function(button) {
            button.onclick = self.Events.checkButton_click    
        })

        this.$inputTask.onkeypress = self.Events.inputTask_keypress.bind(this)
        this.$removeButtons.forEach(function(button){
            button.onclick = self.Events.removeButton_click.bind(self)
        })
    },

    getStoraged:function() {
        const tasks = localStorage.getItem('tasks')

        this.tasks = JSON.parse(tasks)
    },

    getTasksHtml: function(task){
        return  `
            <li>
                <div class="check"></div>
                <label class="task">
                    ${task}
                </label>
                <button class="remove" data-task="${task}"></button>
            </li>
        `

    },

    buildTasks: function(){
        let html =''

        this.tasks.forEach(item => {    
            html += this.getTasksHtml(item.task)
        })

        this.$list.innerHTML = html
        this.cacheSelectors()
        this.bindEvents()
    },



    Events:{
        checkButton_click: function(e){
            const li = e.target.parentElement

            //contains verifica se o valor existe dendro do classlist
            //console.log(li.classList.contains('done'))

            const isDone = li.classList.contains('done')

            if(!isDone){
              return  li.classList.add('done')
            } 

            li.classList.remove('done')
        },

        inputTask_keypress:function(e){
            const key = e.key
            const value = e.target.value

            if(key === 'Enter'){
                this.$list.innerHTML += this.getTasksHtml(value)

                e.target.value =''

                this.cacheSelectors()
                this.bindEvents()

                const savedTasks = localStorage.getItem('tasks')
                const savedTasksObj = JSON.parse(savedTasks)

                const obj = [
                    {task:value},
                    ...savedTasksObj,
                ]

                localStorage.setItem('tasks', JSON.stringify(obj))
            }
        },

        removeButton_click: function(e){
            const li = e.target.parentElement
            const value = e.target.dataset['task']

            const newTaksState = this.tasks.filter(item => item.task !== value)

            localStorage.setItem('tasks',JSON.stringify(newTaksState))

            li.classList.add('removed')

            setTimeout(function(){
                li.classList.add('hidden')
            },300)
        }
    }
}

Main.init()