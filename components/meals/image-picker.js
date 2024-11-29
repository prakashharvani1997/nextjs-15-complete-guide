"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
    const [pickedImage, SetPickedImage] = useState();

    const imageInPut = useRef();

    function handlePickerClick() {
        imageInPut.current.click();
    }
    function handleImageChange(e) {
        const file = e.target.files[0];

        if (!file) {
            SetPickedImage(null);
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            SetPickedImage(fileReader.result);
        };
        fileReader.readAsDataURL(file);
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>
                {" "}{label}{" "}
            </label>

            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p> No Image picket Yet.</p>}
                    {pickedImage &&
                        <Image src={pickedImage} alt="The Image selected by user" fill />}
                </div>

                <input
                    className={classes.input}
                    type="file"
                    multiple
                    onChange={handleImageChange}
                    id={name}
                    name={name}
                    ref={imageInPut}
                    
                    accept="image/png , image/jpg"
                />

                <button
                    className={classes.button}
                    type="button"
                    onClick={handlePickerClick}
                >
                    Pick a Image{" "}
                </button>
            </div>
        </div>
    );
}
