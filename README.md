# CITATION.cff Generator: User Guide

## Website available at



## 1. Overview

The CITATION.cff Generator is a professional, standalone web application designed to help researchers, developers, and academics effortlessly create `CITATION.cff` files. These files provide standardized, human- and machine-readable citation information for software, datasets, and other research outputs.

Built with a focus on simplicity, privacy, and user experience, this tool operates entirely within your web browser. No data is ever sent to a server, ensuring complete privacy and control over your information. The intuitive interface guides you through the process of adding the necessary metadata, provides a real-time preview of the final file, and allows you to export your work with a single click.

### What is a CITATION.cff file?
> A CITATION.cff file is a plain text file with human- and machine-readable citation information. By adding a `CITATION.cff` file to the root directory of a repository (e.g., on GitHub or GitLab), you make it easy for others to correctly cite your work, giving you the academic or professional credit you deserve.

## 2. Main Interface

The application is organized into a clean, two-column layout for a seamless workflow:

*   **Metadata Form (Left Panel):** An interactive form where you input all the citation details for your project.
*   **Live Preview (Right Panel):** A real-time display that shows you exactly what your `CITATION.cff` file will look like, formatted in proper YAML syntax, as you type.

This dual-panel design allows you to instantly see the results of your entries and correct any mistakes on the fly.

## 3. Core Functionalities

### 3.1. Metadata Form Fields

This form contains all the fields needed to generate a comprehensive `CITATION.cff` file. Fields marked with a red asterisk (`*`) are required for a valid file.

| Field Name | Description | Example / Notes |
| --- | --- | --- |
| **Title** `*` | The main title of your project, software, or dataset. | `My Awesome Data Analysis Tool` |
| **Authors** `*` | The individuals who created the work. Each author is a separate entry. | See section 3.2 for details. |
| **Citation Message & Type** | A dropdown to select the type of work you are citing. This automatically sets a default citation message and the `type` field in the final file. | `For a Dataset` will set the type to `dataset`. |
| **Abstract** | A brief summary or description of the work. This helps others quickly understand the purpose and scope of your project. | `A Python library for analyzing...` |
| **Keywords** | A list of relevant keywords to improve discoverability. | Enter as a comma-separated list: `data science, visualization, python` |
| **License** | The license under which the work is distributed. | Select a common one (e.g., `MIT`, `Apache-2.0`) from the dropdown or choose "Other..." to specify a custom one. |
| **Version** | The version number of the work. | `1.0.1` or `v2.3.0` |
| **Date Released** | The date the specified version was released or published. | Use the date picker or enter in `YYYY-MM-DD` format. |
| **DOI** | The Digital Object Identifier for the work. | `10.5281/zenodo.12345` |
| **Repository Code URL** | The URL to the source code repository. | `https://github.com/user/repository` |
| **URL** | A general-purpose URL, such as the project's homepage or documentation site. | `https://my-project-docs.com` |

### 3.2. Dynamic Author Management

Properly crediting authors is crucial. The author management section is designed to be flexible and intuitive.

*   **Author Fields:** For each author, you can provide:
    *   **Given Name:** The author's first name(s).
    *   **Family Name `*`:** The author's last name(s). This is the only required field for an author entry to be valid.
    *   **Email:** The author's contact email.
    *   **Affiliation:** The author's institution, company, or university.
    *   **ORCID:** The author's ORCID iD. It should be entered in the format `0000-0000-0000-0000`.
*   **Add Author:** Click the `Add Author` button to add a new, blank author entry to the form. You can add as many authors as needed.
*   **Remove Author:** Each author entry has a `×` button to remove it. For safety, this button is disabled when there is only one author remaining.

### 3.3. Customizable Citation Message

The "Citation Message & Type" dropdown provides presets for common research outputs:
*   Software
*   Dataset
*   Book
*   Article
*   Technical Report
*   And many more...

Selecting an option from this list automatically updates the `type` field and populates a standard citation message in the preview. If you need a unique message, simply select **"Custom Message..."** from the bottom of the list. A text box will appear, allowing you to write your own.

### 3.4. Live Preview and Actions

The right-hand panel gives you immediate access to your generated file.

*   **Live Preview:** This `pre` formatted text box shows the YAML output. It updates in real-time with every change you make in the form, ensuring the final output is always visible.
*   **Copy to Clipboard:** Click this button to instantly copy the entire YAML content to your clipboard. A "Copied!" confirmation will appear on the button briefly. This is useful for pasting directly into a file or another application.
*   **Download CITATION.cff:** Click this button to generate and download the file. Your browser will prompt you to save a file named `CITATION.cff` containing the content from the preview panel.

## 4. Interface and Customization

The application includes features designed to enhance user comfort and professionalism.

### Theme Selector

Located in the top-right corner of the header, the theme selector allows you to instantly change the application's appearance. Your choice is automatically saved for the duration of your session.

*   **Light Theme (Sun Icon):** A classic, clean interface with a white background and dark text. Ideal for brightly lit environments.
*   **Dark Theme (Moon Icon):** A sleek, modern interface with a dark background and light text. Reduces glare and is ideal for low-light environments.
*   **Blue Light Protection Theme (Eclipse Icon):** A "night light" theme that uses warm, sepia-toned colors to reduce blue light exposure and minimize eye strain during long sessions.

## 5. Design Philosophy

The generator was built on a few key principles:

*   **Responsive Design:** The interface is fully responsive and provides a seamless experience whether you are on a large desktop monitor or a mobile device.
*   **Privacy First:** The tool is 100% client-side. No form data, user activity, or metadata is tracked, collected, or sent to a server. Your work remains entirely private to you.
*   **Zero Dependencies:** The application is self-contained and does not rely on any external frameworks or libraries, making it lightweight, fast, and secure.

---

## License

This project is licensed under the MIT License. See details below.

Copyright (c) 2024 HL Varona

---

**Author:** HL Varona

**Email:** [humberto.varona@gmail.com](mailto:humberto.varona@gmail.com)
