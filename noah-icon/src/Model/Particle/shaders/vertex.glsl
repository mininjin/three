const float PI = 3.141592653589793;
varying vec4 vColor;
attribute vec4 color;
uniform float u_size;
uniform float u_time;
uniform float u_radius_delta;
uniform float u_rotation_velocity;
uniform float u_radius_velocity;
uniform float theta;

void main() {
  vColor = color;

  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  float x = modelPosition.x;
  float y = modelPosition.y;

  float t = u_time * u_radius_velocity;

  // radiusを変化させる

  float r = sqrt(x * x + y * y);

  float reverse_x = cos((theta + PI) * t);
  float reverse_y = sin((theta + PI) * t);
  x = (x - reverse_x) * t + reverse_x;
  y = (y - reverse_y) * t + reverse_y;

  float phi = atan(y, x);
  x = cos(phi) * (r + u_radius_delta * t);
  y = sin(phi) * (r + u_radius_delta * t);

  modelPosition.x = x;
  modelPosition.y = y;
  gl_Position = projectionMatrix * viewMatrix * modelPosition;

  gl_PointSize = u_size;
}