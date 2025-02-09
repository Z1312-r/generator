document.getElementById('designForm').addEventListener('submit', function(event) { 
    event.preventDefault();
    const style = document.getElementById('style').value;
    const size = document.getElementById('size').value;
    const material = document.getElementById('material').value;

    fetch('/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ style, size, material })
    })
    .then(response => response.json())
    .then(data => {
        alert('Design Generated! Check the Gallery.');
        // Update Gallery
    });
});