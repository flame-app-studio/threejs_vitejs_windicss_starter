import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer
} from 'three'

const scene = new Scene()

const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

const render = new WebGLRenderer()

render.setSize(window.innerWidth, window.innerHeight)
render.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1)

const geometry = new BoxGeometry(2, 2, 2)
const material = new MeshBasicMaterial({ color: 'rgb(255, 0, 140)' })

const cube = new Mesh(geometry, material)
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
