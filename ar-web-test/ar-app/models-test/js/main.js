var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000 ); //apertura del lente, proporción, dist corta, dist larga
camera.position.z = 13;
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var light = new THREE.PointLight( 0xffffff, 1, 100 );
light.position.set( 0, 0, 0 );
scene.add(light);

var ambientLight = new THREE.AmbientLight( 0xa5a5a5, 1, 100 );
ambientLight.position.set( 0, 0, 0 );
scene.add(ambientLight);

var geometrySphere = new THREE.SphereGeometry( 1, 32, 32 ); //radio, lin h, lin v
var materialSphere = new THREE.MeshPhongMaterial( {
    ambient: 0x050505, 
    specular: 0x555555, 
    shininess: 30 } );
var sphere = new THREE.Mesh( geometrySphere, materialSphere );
scene.add( sphere );


function render() { 
    requestAnimationFrame(render); 
    renderer.render(scene, camera); 
} 
render();