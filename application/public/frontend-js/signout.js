let signoutElement = document.getElementById("signout-button");
if (signoutElement) {
    signoutElement.onclick = (even) => {
        fetch('/auth/signout', {
            method: "POST"
        })
        .then((data) => {
            location.replace('/');
        })
    }
}