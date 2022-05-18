(function() {
    "use strict";

    var scene, camera, renderer;

    var container,
        aspectRatio,
        HEIGHT,
        WIDTH,
        fieldOfView,
        nearPlane,
        farPlane,
        mouseX,
        mouseY,
        windowHalfX,
        windowHalfY,
        stats,
        geometry,
        starStuff,
        materialOptions,
        root,
        stars;

    init();
    animate();

    function init() {
        container = document.createElement("div");
        document.body.appendChild(container);
        document.body.style.overflow = "hidden";

        root = document.createElement("div");
        root.setAttribute("id", "root");

        container.appendChild(root);

        HEIGHT = window.innerHeight;
        WIDTH = window.innerWidth;
        aspectRatio = WIDTH / HEIGHT;
        fieldOfView = 75;
        nearPlane = 1;
        farPlane = 1000;
        mouseX = 0;
        mouseY = 0;

        windowHalfX = WIDTH / 2;
        windowHalfY = HEIGHT / 2;

        camera = new THREE.PerspectiveCamera(
            fieldOfView,
            aspectRatio,
            nearPlane,
            farPlane
        );

        camera.position.z = farPlane / 2;

        scene = new THREE.Scene({ antialias: true });
        scene.fog = new THREE.FogExp2(0x000000, 0.0003);

        starForge();

        if (webGLSupport()) {
            renderer = new THREE.WebGLRenderer({ alpha: true });
        } else {
            renderer = new THREE.CanvasRenderer();
        }

        renderer.setClearColor(0x000011, 1);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(WIDTH, HEIGHT);
        container.appendChild(renderer.domElement);

        window.addEventListener("resize", onWindowResize, false);
        document.addEventListener("mousemove", onMouseMove, false);
    }

    function animate() {
        requestAnimationFrame(animate);
        render();
        stats.update();
    }

    function render() {
        camera.position.x += (mouseX - camera.position.x) * 0.005;
        camera.position.y += (-mouseY - camera.position.y) * 0.005;
        camera.lookAt(scene.position);
        renderer.render(scene, camera);
    }

    function webGLSupport() {
        try {
            var canvas = document.createElement("canvas");
            return !!(
                window.WebGLRenderingContext &&
                (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
            );
        } catch (e) {
            return false;
        }
    }

    function onWindowResize() {
        var WIDTH = window.innerWidth,
            HEIGHT = window.innerHeight;

        camera.aspect = aspectRatio;
        camera.updateProjectionMatrix();
        renderer.setSize(WIDTH, HEIGHT);
    }

    function starForge() {
        var starQty = 45000;
        geometry = new THREE.SphereGeometry(1000, 100, 50);

        materialOptions = {
            size: 1.0,
            transparency: true,
            opacity: 0.7,
        };

        starStuff = new THREE.PointCloudMaterial(materialOptions);

        for (var i = 0; i < starQty; i++) {
            var starVertex = new THREE.Vector3();
            starVertex.x = Math.random() * 2000 - 1000;
            starVertex.y = Math.random() * 2000 - 1000;
            starVertex.z = Math.random() * 2000 - 1000;

            geometry.vertices.push(starVertex);
        }

        stars = new THREE.PointCloud(geometry, starStuff);
        scene.add(stars);
    }

    function onMouseMove(e) {
        mouseX = e.clientX - windowHalfX;
        mouseY = e.clientY - windowHalfY;
    }
})();