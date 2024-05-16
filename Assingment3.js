document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.container');
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        item.addEventListener('dragstart', dragStart);
        item.addEventListener('dragend', dragEnd);
    });

    containers.forEach(container => {
        container.addEventListener('dragover', dragOver);
        container.addEventListener('drop', drop);
        container.addEventListener('dragleave', dragLeave);
        container.addEventListener('dragenter', dragEnter);
    });

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
        setTimeout(() => {
            e.target.classList.add('hide');
        }, 0);
    }

    function dragEnd(e) {
        e.target.classList.remove('hide');
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dragEnter(e) {
        e.preventDefault();
        this.classList.add('over');
    }

    function dragLeave() {
        this.classList.remove('over');
    }

    function drop(e) {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        const draggable = document.getElementById(id);
        this.appendChild(draggable);
        this.classList.remove('over');
    }
});
