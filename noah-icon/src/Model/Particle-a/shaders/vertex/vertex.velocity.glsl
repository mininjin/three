const float PI = 3.141592653589793;
varying vec4 vColor;
attribute vec4 color;
uniform float u_size;
uniform float u_time;
uniform float u_dt;
uniform float u_velocity;
uniform float u_outer_radius;
uniform float u_outer_theta;
uniform float u_outer_velocity;

vec2 getVelocity(vec2 v, float t) {
  vec2 v_0 = u_outer_radius * vec2(cos(u_outer_velocity * t + u_outer_theta), sin(u_outer_velocity * t + u_outer_theta));
  float d = distance(v_0, v);
  float r = distance(v_0, vec2(0.0, 0.0));
  return (v - v_0) * d / r * t;
}

void main() {
  vColor = color;

  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  float x = modelPosition.x;
  float y = modelPosition.y;

  float dt = u_velocity * u_dt;

  vec2 velocity = getVelocity(vec2(x, y), u_time);
  x += velocity.x * dt;
  y += velocity.y * dt;

  modelPosition.x = x;
  modelPosition.y = y;
  gl_Position = projectionMatrix * viewMatrix * modelPosition;

  gl_PointSize = u_size;
}
