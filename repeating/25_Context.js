// Контекст часто путают со Scope. 
// Scope - visibility 
// Context - how functions was invoked. Points to this.
// call, apply, bind
// Skip Vladilen's lesson about context. Don't like example let's see another one for this
// https://www.youtube.com/watch?v=_JMXlGt3OSo
// Good theory.. Nice explanation. Nice.. 

// Отдельный урок... )) Владилена / Separate lesson
// https://www.youtube.com/watch?v=UGapN-hrekw
// Здесь уже без бреда про Game Of Thrones... вроде 
// Там он походу под конец ролика сам подустал)) Сдулся

function hello() {
    console.log('Hello', 'this=', this);
}

hello();

