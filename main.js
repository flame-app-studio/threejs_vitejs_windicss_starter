import '@fontsource/fira-code'
import * as THREE from 'three'
import 'virtual:windi.css'
import './style.css'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

const render = new THREE.WebGLRenderer()

render.setSize(window.innerWidth, window.innerHeight)
render.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1)

const geometry = new THREE.BoxGeometry(2, 2, 2)
const material = new THREE.MeshBasicMaterial({ color: 'rgb(255, 0, 140)' })

const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

camera.position.z = 5

document.body.appendChild(render.domElement)

function animate() {
  requestAnimationFrame(animate)
  render.render(scene, camera)

  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
}

animate()
