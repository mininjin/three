float saturate(float x) {
  return clamp(x, 0.0, 1.0);
}

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

mat2 rotate2d(float _angle) {
  return mat2(cos(_angle), -sin(_angle), sin(_angle), cos(_angle));
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
uniform float u_rotate;

uniform float u_time;

vec2 rose(float t, float w1, float w2) {
  return cos(w1 * t) * vec2(cos(w2 * t), sin(w2 * t));
}

vec2 getPositonA(vec2 pos, float t, float seed) {
  float r = length(pos);
  pos = rose(t, 2., seed);
  pos.x += 0.5 * noise(vec2(pos.x, t)) * sin(t * noise(vec2(r, seed * t)));
  pos.y += 1. * noise(vec2(pos.y, t)) * sin(t * noise(vec2(r, seed * t))) + 0.5 * sin(noise(vec2(r, seed * t)));
  return pos;
}

void main() {
  vColor = color;

  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  vec2 pos = modelPosition.xy;
  float t = (u_time + 10.) / u_period + 2. * PI * seed;
  float dt = u_dt / u_period;

  float r = length(pos);

  pos = getPositonA(pos, t, seed);
  pos = rotate2d(noise(vec2(t, dt)) * 0.0001) * pos;

  r = length(pos);
  pos = pos * saturate(0.3 * r + 0.7 * noise(vec2(r, t))) / r;

  pos = rotate2d(u_rotate) * pos;

  modelPosition.xy = pos;

  gl_Position = projectionMatrix * viewMatrix * modelPosition;

  gl_PointSize = u_size;
}
