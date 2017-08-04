class WordCount {
    constructor(quill, props) {
        this.quill = quill;
        this.props = props;
        this.container = this.quill.container.parentNode.querySelector(props.container);
        this.quill.on('text-change', this.update.bind(this));
        this.update();  // Account for initial contents
    }

    calculate(){
        var text = this.quill.getText();
        if (this.props.unit === 'word') {
            text = text.trim();
            // Splitting empty text returns a non-empty array
            return text.length > 0 ? text.split(/\s+/).length : 0;
        } else {
            return text.length;
        }
    }

    update() {
        var length = this.calculate();
        var label = this.props.unit;
        if (length !== 1) {
            label += 's';
        }
        this.container.innerHTML = length + ' ' + label;
    }
}
Quill.register('modules/wordCount', WordCount);
