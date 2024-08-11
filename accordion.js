(() => {

    class Accordion {
        // 初期化
        constructor(obj){

            // console.log('obj', obj);

            const $doc = document;
            const $elm = $doc.querySelector(obj['hookName']);
            const $trigger = $elm.getElementsByTagName(obj['tagName']);
        
            const triggerLength = $trigger.length;
            let index = 0;
            while(index < triggerLength){
                // aタグを押したら、clickHandlerが個数分、発火する処理
                $trigger[index].addEventListener('click', (e) => this.clickHandler(e));
                index++;
            }

            // this.actionUnko();
        } 

        // actionUnko() {
        //     let Name = 'Unko';
        //     console.log(`Hello World ${Name}`);
        // }

        clickHandler = (e) => {
            e.preventDefault();
            // const $content = $trigger[0].nextElementSibling; // 0個目の要素のコンテントが出るか確認
    
            // clickされたら、対象のコンテントが表示するようにする　
            const $target = e.currentTarget;
            const $content = $target.nextElementSibling;
            
            // コンテントがblockが表示されるようなら、それ以外なら表示する
            if ($content.style.display === 'block') {
                $content.style.display = 'none';
            }else{
                $content.style.display = 'block'
            }
            // aタグを押したら、clickHandlerが発火する処理
            // $trigger[0].addEventListener('click', (e) => clickHandler(e));　// 0個目のaタグを押したら関数が発火する
        }
    }

    const fuckingAccordion = new Accordion({
        hookName: '#js-faq',
        tagName: 'p',
    });

    const dummyAccordion = new Accordion({
        hookName: '#js-accordion',
        tagName: 'a',
    });



})();