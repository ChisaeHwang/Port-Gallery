var Engine = Matter.Engine;
var Render = Matter.Render;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Events = Matter.Events;
var Composite = Matter.Composite;
var Composites = Matter.Composites;
var Constraint = Matter.Constraint;
var Body = Matter.Body;
var Mouse = Matter.Mouse;
var MouseConstraint = Matter.MouseConstraint;
var Runner = Matter.Runner;
var Common = Matter.Common;
var Svg = Matter.Svg;
var Vertices = Matter.Vertices;

document.write("<script src='js/tag.js' defer></script>");
document.write("<script src='js/photoFrame.js'></script>");

var engine = Engine.create();
var world = engine.world;
engine.world.gravity.y = 2.5;

const backimg = document.querySelector('.backimg');

let light = false;

let width = $(backimg).width();
let height = $(backimg).height();

var lamp = Bodies.circle(width/2, 210, 20, {
  density: 0.0005,
            frictionAir: 0.06,
            restitution: 0.3,
            friction: 0.01,
            render: {
                sprite: {
                    texture: './img/lamp.png',
                    xScale: 0.09,
                    yScale: 0.10
                }
            }
});

Body.applyForce(lamp, lamp.position, {
  x: 0,
  y: 0
})

var render = Render.create({
    element: document.querySelector('.backimg'),
    engine: engine,
    options: {
      width: width,
      height: height,
      wireframes: false,
      background: 'transparent',
      wireframeBackground: 'transparent',
    }
});

const mouse = Mouse.create(render.canvas);
const mouseConstraint = MouseConstraint.create(engine, {
  mouse,
  constraint: {
    render: {
      visible: false,
    },
  },
});

var ropeRenderStyle = {
  fillStyle: '#000000',
  strokeStyle: '#000000',
  lineWidth: 2.5,
  type: "line"
}

const clickText = document.querySelectorAll(".backText");

clickText[0].addEventListener("click", (e) => {
  createLamp();
  grabLamp();
  setInterval(lightPosition, 1);
}, false);

function createLamp(){
  group = Body.nextGroup(true);

  var ropeB = Composites.stack(width/2, 100, 10, 1, 10, 10, function(x, y) {
    return Bodies.rectangle(x , y, 15, 3, {
      collisionFilter: { 
       group: group 
      }, 
      render : ropeRenderStyle
    });
  });

  Composite.add(ropeB, Constraint.create({
      bodyB: ropeB.bodies[0],
      pointB: { x: 0, y: 0 },
      pointA: { x: ropeB.bodies[0].position.x, y: ropeB.bodies[0].position.y },
      stiffness: 0.5,
      render : ropeRenderStyle
    })
  );

  Composite.add(ropeB, lamp); 
  
  Composites.chain(ropeB, 0.5, 0, -0.5, 0, {
      stiffness: 0.8,
      length: 1,
      render: ropeRenderStyle
    });

    World.add(world, ropeB);
}

function lightPosition(){
    if (lamp) {
        const x = lamp.position.x;
        const y = lamp.position.y + 130;

        document.documentElement.style.setProperty(
          '--lampX', x + 'px')
        document.documentElement.style.setProperty(
          '--lampY', y + 'px')
    }
}

function grabLamp(){
Events.on(mouseConstraint, "mousedown", () => {
    const { body } = mouseConstraint;
    if (body){
      if(light){
          offImg();
          light = false;
          reset();
          pageNum = 4;
      }
      else if(!light){
          changeImg();
          light = true;
      }

      console.log(light);

    }
    });
}


World.add(world, mouseConstraint);

render.mouse = mouse;

Matter.Runner.run(engine);

Render.run(render);

