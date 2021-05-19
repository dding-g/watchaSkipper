const observation = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
            mutation.target.click();
        }
    });
});

observation.observe(document.querySelectorAll("[data-select='skip_opening']")[0], {
    attributes: true,
});