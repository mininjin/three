float cnoise(vec3 P);

float saturate(float x) {
  return clamp(x, 0.0, 1.0);
}

//////////////////////////////
// source
//////////////////////////////

const float PI = 3.141592653589793;
varying vec4 vColor;
attribute vec4 color;
uniform float u_size;
uniform float u_time;
uniform float u_dt;
uniform float u_period;
uniform float u_time_randomness;

const float field_noise_ratio = 0.1;

const float velocity_effect = 0.1;

float getRadiusVelocity(float r, float t) {
  float a = r;
  float b = 1. / r;
  float theta = 2. * PI * (r + velocity_effect * t);
  return a * cos(theta) + b * sin(theta);
}

const float theta0 = PI / 2.;

float getThetaVelocity(float theta, float t) {
  return (theta - theta0) * log(2. + sin(t));
}

void main() {
  vColor = color;

  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  float x = modelPosition.x;
  float y = modelPosition.y;
  float t = u_time / u_period;

  vec2 pos = vec2(x, y);
  float r = length(pos);
  float theta = atan(y, x);

  vec2 norm_p = pos / r;
  float noise = cnoise(vec3(norm_p.x, norm_p.y, t));

  float dt = u_dt / u_period + u_time_randomness * noise * sin(2. * PI * t);

  r += getRadiusVelocity((1. - field_noise_ratio + field_noise_ratio * noise) * r, t) * dt;

  theta += 2. * PI * getThetaVelocity(theta, t) * dt;
  // rotate
  pos = saturate(r) * vec2(cos(theta), sin(theta));

  modelPosition.x = pos.x;
  modelPosition.y = pos.y;
  gl_Position = projectionMatrix * viewMatrix * modelPosition;

  gl_PointSize = u_size;
}
