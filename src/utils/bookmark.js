// Get saved tutor IDs from localStorage
export function getSavedTutorIds() {
    if (typeof window === 'undefined') {
        return [];
    }
    const savedIds = localStorage.getItem('savedTutorIds');
    return savedIds ? JSON.parse(savedIds) : [];
}

// Set saved tutor IDs in localStorage
export function setSavedTutorIds(ids) {
    if (typeof window === 'undefined') {
        return;
    }
    localStorage.setItem('savedTutorIds', JSON.stringify(ids));
}

// Add a tutor ID to saved IDs
export function addTutorId(tutorId) {
    const savedIds = getSavedTutorIds();
    if (!savedIds.includes(tutorId)) {
        savedIds.push(tutorId);
        setSavedTutorIds(savedIds);
    }
}

// Remove a tutor ID from saved IDs
export function removeTutorId(tutorId) {
    const savedIds = getSavedTutorIds();
    const updatedIds = savedIds.filter(id => id !== tutorId);
    setSavedTutorIds(updatedIds);
}
