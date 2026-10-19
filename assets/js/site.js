const dogImage = document.getElementById("dog-image");
const button = document.getElementById("new-dog-button");
const message = document.getElementById("message");

async function showDog() {
	button.disabled = true;
	message.textContent = "Loading dogs ...";


	try {
		const response = await fetch("https://dog.ceo/api/breeds/image/random");
		const data = await response.json();

		if (!response.ok || data.status !== "success") {
			throw new Error("no dog photos");
		}

		dogImage.src = data.message;
		message.textContent = "";
	} catch (error) {
		message.textContent = "tha dog photo didn't load.";
	}	button.disabled = false;
}



button.addEventListener("click", showDog);
if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register("pwa/service-worker.js", { scope: "/" });
	
}

