function generateBishBosh() {
    const loopLimit = parseInt(document.getElementById('loop-limit').value);
    const bishNum = parseInt(document.getElementById('bish').value);
    const boshNum = parseInt(document.getElementById('bosh').value);

    if (loopLimit <= 0 || bishNum <= 0 || boshNum <= 0) {
        alert("Input values must be greater than zero!");
        return;
    }

    let output = '';

    for (let i = 1; i <= loopLimit; i++) {
        if (i % bishNum === 0 && i % boshNum === 0) {
            output += 'Bish-Bosh, ';
        } else if (i % bishNum === 0) {
            output += 'Bish, ';
        } else if (i % boshNum === 0) {
            output += 'Bosh, ';
        } else {
            output += i + ', ';
        }
    }

    // Remove trailing comma and space
    output = output.slice(0, -2);

    document.getElementById('bish-bosh-output').innerHTML = '<p>' + output + '</p>';
}
