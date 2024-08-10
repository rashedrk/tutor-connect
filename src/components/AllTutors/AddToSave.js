'use client'

import { addTutorId, getSavedTutorIds, removeTutorId } from "@/utils/bookmark";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
const AddToSave = ({ tutorId }) => {
    const [isSaved, setIsSaved] = useState(getSavedTutorIds().includes(tutorId));
    const handleCheckboxChange = (e) => {
        if (e.target.checked) {
            addTutorId(tutorId);
            setIsSaved(true);
        } else {
            removeTutorId(tutorId);
            setIsSaved(false);
        }
    };
    return (
        <div className="flex justify-center items-center gap-1">
            <label className="swap">
                <input
                    type="checkbox"
                    checked={isSaved}
                    onChange={handleCheckboxChange}
                />
                <FaRegHeart className={`swap-off ${isSaved ? 'hidden' : ''}`} />
                <FaHeart className={`swap-on text-red-600 ${isSaved ? '' : 'hidden'}`} />

            </label>
            Add to Save
        </div>
    );
};

export default AddToSave;