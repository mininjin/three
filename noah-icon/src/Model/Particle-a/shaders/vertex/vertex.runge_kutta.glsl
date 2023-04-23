const float PI = 3.141592653589793;
varying vec4 vColor;
attribute vec4 color;
uniform float u_size;
uniform float u_time;
uniform float u_dt;
uniform float u_velocity;
uniform float u_outer_radius;
uniform float u_force_constant;
uniform float u_radius_delta;

vec2 ForceFunction(vec2 v, float t) {
  float r = sqrt(v.x * v.x + v.y * v.y);
  float constant = u_force_constant * sin(t) / ((r - u_outer_radius) / u_outer_radius * (r - u_outer_radius) / u_outer_radius);
  return vec2(v.x * constant, v.y * constant);
}

vec2 RungeKutta(vec2 v, float t, float dt) {
  vec2 k1 = ForceFunction(v, t);
  vec2 k2 = ForceFunction(v + 0.5 * k1 * dt, t + 0.5 * dt);
  vec2 k3 = ForceFunction(v + 0.5 * k2 * dt, t + 0.5 * dt);
  vec2 k4 = ForceFunction(v + k3 * dt, t + dt);
  return v + (k1 + 2.0 * k2 + 2.0 * k3 + k4) / 6.0 * dt;
}

void main() {
  vColor = color;

  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  float x = modelPosition.x;
  float y = modelPosition.y;

  float r = sqrt(x * x + y * y);
  float dt = u_velocity * u_dt;

  vec2 p_runge_kutta = RungeKutta(vec2(x, y), u_time, dt);
  x = p_runge_kutta.x;
  y = p_runge_kutta.y;

  float phi = atan(y, x);
  x = cos(phi + 2.0 * PI * dt) * (r + dt * u_radius_delta);
  y = sin(phi + 2.0 * PI * dt) * (r + dt * u_radius_delta);

  modelPosition.x = x;
  modelPosition.y = y;
  gl_Position = projectionMatrix * viewMatrix * modelPosition;

  gl_PointSize = u_size;
}
