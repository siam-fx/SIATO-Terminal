const input = document.getElementById("commandInput");
const output = document.getElementById("output");

input.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        const command = input.value.toLowerCase().trim();

        // Print the command
        output.innerHTML += `<br><br>siato@system:~$ ${command}`;

        if (command === "help") {

            output.innerHTML += `
            <br><br>
            Available Commands:<br>
            ➜ help<br>
            ➜ about<br>
            ➜ whoami<br>
            ➜ date<br>
            ➜ clear
            `;

        }

        else if (command === "about") {

            output.innerHTML += `
            <br><br>
            SIATO Terminal v1.0<br>
            Created by Abdullah (Siato)<br>
            Built with HTML, CSS & JavaScript
            `;

        }

        else if (command === "whoami") {

            output.innerHTML += `
            <br><br>
            Name: Abdullah<br>
            Alias: Siato<br>
            Role: CSE Student<br>
            Goal: Future Cybersecurity Specialist
            `;

        }

        else if (command === "date") {

            output.innerHTML += `
            <br><br>
            ${new Date()}
            `;

        }

        else if (command === "clear") {

            output.innerHTML = `
            Welcome to SIATO Terminal<br>
            Type <span class="command">help</span> to see available commands.
            `;

        }

        else if (command === "") {
            // Do nothing if Enter is pressed on an empty line.
        }

        else {

            output.innerHTML += `
            <br><br>
            ❌ Command not found: ${command}<br>
            Type <span class="command">help</span> to see available commands.
            `;

        }

        // Clear the input box
        input.value = "";

        // Auto-scroll to the bottom
        output.scrollTop = output.scrollHeight;

    }

});