document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cff-form');
    const preview = document.getElementById('preview');
    const addAuthorBtn = document.getElementById('add-author');
    const authorsContainer = document.getElementById('authors-container');
    const downloadBtn = document.getElementById('download-button');
    const copyBtn = document.getElementById('copy-button');
    const licenseSelect = document.getElementById('license-select');
    const licenseCustom = document.getElementById('license-custom');
    const messageSelect = document.getElementById('message-select');
    const messageCustom = document.getElementById('message-custom');
    const lightThemeBtn = document.getElementById('light-theme');
    const darkThemeBtn = document.getElementById('dark-theme');
    const blueLightThemeBtn = document.getElementById('blue-light-theme');

    const messagePresets = {
        software: "If you use this software, please cite it using the metadata from this file.",
        dataset: "If you use this dataset, please cite it using the metadata from this file.",
        book: "If you use this book, please cite it using the metadata from this file.",
        'book-chapter': "If you use this book chapter, please cite it using the metadata from this file.",
        article: "If you use this article, please cite it using the metadata from this file.",
        report: "If you use this technical report, please cite it using the metadata from this file.",
        audio: "If you use this audio, please cite it using the metadata from this file.",
        map: "If you use this map, please cite it using the metadata from this file.",
        image: "If you use this image, please cite it using the metadata from this file.",
        video: "If you use this video, please cite it using the metadata from this file."
    };

    const typeMapping = {
        software: 'software',
        dataset: 'dataset',
        book: 'book',
        'book-chapter': 'book',
        article: 'article',
        report: 'report',
        audio: 'software', // CFF does not have 'audio' type, fallback to software
        map: 'software', // CFF does not have 'map' type, fallback to software
        image: 'software', // CFF does not have 'image' type, fallback to software
        video: 'software', // CFF does not have 'video' type, fallback to software
        custom: 'software'
    };

    const updatePreview = () => {
        let yaml = `cff-version: 1.2.0\n`;

        const messageType = messageSelect.value;
        let message;
        if (messageType === 'custom') {
            message = messageCustom.value.trim();
        } else {
            message = messagePresets[messageType];
        }
        yaml += `message: "${message || messagePresets.software}"\n`;

        const cffType = typeMapping[messageType];
        yaml += `type: ${cffType}\n`;

        yaml += 'authors:\n';
        const authorEntries = authorsContainer.querySelectorAll('.author-entry');
        authorEntries.forEach(entry => {
            const givenName = entry.querySelector('.author-given-name').value.trim();
            const familyName = entry.querySelector('.author-family-name').value.trim();
            const email = entry.querySelector('.author-email').value.trim();
            const affiliation = entry.querySelector('.author-affiliation').value.trim();
            const orcid = entry.querySelector('.author-orcid').value.trim();
            
            if (familyName) {
                yaml += `  - family-names: "${familyName}"\n`;
                if (givenName) yaml += `    given-names: "${givenName}"\n`;
                if (email) yaml += `    email: ${email}\n`;
                if (affiliation) yaml += `    affiliation: "${affiliation}"\n`;
                if (orcid && /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(orcid)) {
                    yaml += `    orcid: https://orcid.org/${orcid}\n`;
                }
            }
        });

        const title = document.getElementById('title').value.trim();
        if (title) yaml += `title: "${title}"\n`;
        
        const version = document.getElementById('version').value.trim();
        if (version) yaml += `version: ${version}\n`;
        
        const doi = document.getElementById('doi').value.trim();
        if (doi) yaml += `doi: ${doi}\n`;
        
        const dateReleased = document.getElementById('date-released').value;
        if (dateReleased) yaml += `date-released: ${dateReleased}\n`;
        
        const abstract = document.getElementById('abstract').value.trim();
        if (abstract) yaml += `abstract: "${abstract.replace(/"/g, '\\"')}"\n`;

        const keywords = document.getElementById('keywords').value.trim();
        if (keywords) {
            yaml += 'keywords:\n';
            keywords.split(',').forEach(kw => {
                const trimmedKw = kw.trim();
                if (trimmedKw) yaml += `  - "${trimmedKw}"\n`;
            });
        }
        
        let license = licenseSelect.value;
        if (license === 'Other') {
            license = licenseCustom.value.trim();
        }
        if (license) yaml += `license: ${license}\n`;

        const repoCode = document.getElementById('repository-code').value.trim();
        if (repoCode) yaml += `repository-code: "${repoCode}"\n`;
        
        const url = document.getElementById('url').value.trim();
        if (url) yaml += `url: "${url}"\n`;

        preview.textContent = yaml;
    };

    const addAuthor = () => {
        const authorEntry = document.createElement('div');
        authorEntry.className = 'author-entry';
        authorEntry.innerHTML = `
            <input type="text" placeholder="Given Name" class="author-given-name">
            <input type="text" placeholder="Family Name" class="author-family-name" required>
            <input type="email" placeholder="Email" class="author-email">
            <input type="text" placeholder="Affiliation" class="author-affiliation">
            <input type="text" placeholder="ORCID (e.g., 0000-0000-0000-0000)" class="author-orcid">
            <button type="button" class="remove-author">&times;</button>
        `;
        authorsContainer.appendChild(authorEntry);
        authorEntry.querySelector('.remove-author').addEventListener('click', () => {
            authorEntry.remove();
            updateRemoveButtons();
            updatePreview();
        });
        
        authorEntry.querySelectorAll('input').forEach(input => input.addEventListener('input', updatePreview));
        updateRemoveButtons();
    };

    const updateRemoveButtons = () => {
        const removeButtons = authorsContainer.querySelectorAll('.remove-author');
        removeButtons.forEach(button => button.disabled = removeButtons.length === 1);
    };

    const handleLicenseChange = () => {
        licenseCustom.classList.toggle('hidden', licenseSelect.value !== 'Other');
        updatePreview();
    };
    
    const handleMessageChange = () => {
        messageCustom.classList.toggle('hidden', messageSelect.value !== 'custom');
        updatePreview();
    };

    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        sessionStorage.setItem('theme', theme);
    };

    // Event Listeners
    form.addEventListener('input', updatePreview);
    addAuthorBtn.addEventListener('click', addAuthor);
    licenseSelect.addEventListener('change', handleLicenseChange);
    messageSelect.addEventListener('change', handleMessageChange);
    
    downloadBtn.addEventListener('click', () => {
        const blob = new Blob([preview.textContent], { type: 'text/yaml;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'CITATION.cff';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });

    copyBtn.addEventListener('click', () => {
        if (!preview.textContent) return;
        navigator.clipboard.writeText(preview.textContent).then(() => {
            const originalText = copyBtn.textContent;
            copyBtn.textContent = 'Copied!';
            setTimeout(() => { copyBtn.textContent = originalText; }, 2000);
        });
    });

    lightThemeBtn.addEventListener('click', () => setTheme('light'));
    darkThemeBtn.addEventListener('click', () => setTheme('dark'));
    blueLightThemeBtn.addEventListener('click', () => setTheme('blue-light'));
    
    // Initial setup
    const savedTheme = sessionStorage.getItem('theme');
    setTheme(savedTheme || 'light');
    updateRemoveButtons();
    handleLicenseChange();
    handleMessageChange();
    updatePreview();
});