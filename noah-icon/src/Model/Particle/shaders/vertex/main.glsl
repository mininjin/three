
// 2D Random
float random(in vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

// 2D Noise based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
float noise(in vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);

    // Four corners in 2D of a tile
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));

    // Smooth Interpolation

    // Cubic Hermine Curve.  Same as SmoothStep()
  vec2 u = f * f * (3.0 - 2.0 * f);
    // u = smoothstep(0.,1.,f);

    // Mix 4 coorners percentages
  return mix(a, b, u.x) +
    (c - a) * u.y * (1.0 - u.x) +
    (d - b) * u.x * u.y;
}

//////////////////////////////
// source
//////////////////////////////

const float PI = 3.14159265359;

varying vec4 vColor;
attribute float seed;
attribute vec4 color;
uniform float u_size;
uniform float u_dt;
uniform float u_period;

uniform float u_time;

void main() {
  vColor = color;

  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  vec2 pos = modelPosition.xy;
  float t = u_time / u_period + 2. * PI * seed;
  float dt = u_dt / u_period;

  pos.x = 2. * sin(t) + 0.5 * noise(vec2(pos.x, t));
  pos.y = sin(t) * cos(t) + 0.5 * noise(vec2(pos.y, t));

  float theta = atan(pos.y, pos.x);
  float r = length(pos);
  theta += 0.1 * sin(t) * dt;
  pos = r * vec2(cos(theta), sin(theta));

  modelPosition.xy = pos;

  gl_Position = projectionMatrix * viewMatrix * modelPosition;

  gl_PointSize = u_size;
}
