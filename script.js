function generateResume() {
    // Get values from inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;

    // Update the Preview section
    document.getElementById("pName").innerText = name;
    document.getElementById("pEmail").innerText = email;
    document.getElementById("pPhone").innerText = phone;
    document.getElementById("pEducation").innerText = education;
    document.getElementById("pExperience").innerText = experience;
    document.getElementById("pSkills").innerText = skills;
}

function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Get values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;

    // Title
    doc.setFontSize(22);
    doc.text("Resume", 20, 20);
    
    // Content
    doc.setFontSize(12);
    doc.text(`Name: ${name}`, 20, 40);
    doc.text(`Email: ${email}`, 20, 50);
    doc.text(`Phone: ${phone}`, 20, 60);
    
    doc.setFont("helvetica", "bold");
    doc.text("Education:", 20, 80);
    doc.setFont("helvetica", "normal");
    doc.text(education, 20, 90);

    doc.setFont("helvetica", "bold");
    doc.text("Experience:", 20, 110);
    doc.setFont("helvetica", "normal");
    doc.text(experience, 20, 120);

    doc.setFont("helvetica", "bold");
    doc.text("Skills:", 20, 140);
    doc.setFont("helvetica", "normal");
    doc.text(skills, 20, 150);

    // Save PDF
    doc.save(`${name.replace(/\s+/g, '_')}_Resume.pdf`);
}