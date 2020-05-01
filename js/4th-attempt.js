const loadDynamicScript = (pathToScript, id, callback) => {
    const existingScript = document.getElementById(id);

    if (!existingScript) {
        const script = document.createElement('script');
        script.src = pathToScript;
        script.id = id;
        document.body.appendChild(script);

        script.onload = () => {
            if (callback) callback();
        };
    }

    if (existingScript && callback) callback();
};

loadDynamicScript('//cdnjs.cloudflare.com/ajax/libs/gsap/3.2.4/gsap.min.js', 'gsap', function () {
    console.log('Now you can use Gsap');
});
