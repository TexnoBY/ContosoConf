export class SpeakerBadgePage {
    constructor(element) {
        this.imageElement = element.querySelector("img");

        element.addEventListener("dragover", this.handleDragOver.bind(this), false);
        element.addEventListener("drop", this.handleDrop.bind(this), false);

    }

    handleDragOver(event) {
        event.stopPropagation();
        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy'; // Makes the browser display a "copy" cursor.
    }

    handleDrop(event) {
        event.stopPropagation();
        event.preventDefault();
        const files = event.dataTransfer.files;


        if (files.length == 0) return;

        const file = files[0];

        if (this.isImageType(file.type)) {
            this.readFile(file).then((file)=> this.displayImage(file));
        } else {
            alert("Please drop an image file.");
        }
    }

    isImageType(type) {
        const imageTypes = ["image/jpeg", "image/jpg", "image/png"];
        return imageTypes.indexOf(type) >= 0;
    }

    readFile(file) {
        return new Promise(function (resolve, reject) {
            const reader = new FileReader();

            reader.onload = function(event) {
                const fileDataUrl = event.target.result;
                return resolve([fileDataUrl]);
            }

            reader.readAsDataURL(file);
        });
    }

    displayImage(imageUrl) {
        this.imageElement.src = imageUrl;
    }
}
