class WordCount {
    constructor(quill, props) {
        this.quill = quill;
        this.props = props;
        this.container = this.quill.container;
        this.quill.on('text-change', this.update.bind(this));
        this.toolbar = quill.getModule('toolbar');
        this.update();  // Account for initial contents
    }

    calculate(){
        let text = this.quill.getText();
        text = text.trim();
        // Splitting empty text returns a non-empty array
        return text.length > 0 ? text.split(/\s+/).length : 0;
    }

    update() {
        let length = this.calculate();
        let label = 'word';
        if (length !== 1) {
            label += 's';
        }
        this.toolbar = this.quill.getModule('toolbar');
        let countView = document.getElementById('quill-word-count');
        if (!countView) {
            let countView = document.createElement('span');
            countView.id = 'quill-word-count';
            this.toolbar.container.appendChild(countView);
            countView.innerHTML = length + ' ' + label;
        }
        else{
            countView = document.getElementById('quill-word-count');
            countView.innerHTML = length + ' ' + label;
        }
    }
}
Quill.register('modules/wordCount', WordCount);
