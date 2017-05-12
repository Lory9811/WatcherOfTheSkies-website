attribute vec4 vPos;
attribute vec2 vTexCoord;

uniform float uFrame;

varying vec2 texCoord;

void main () {
	float angle = radians(uFrame);
	float c = cos(angle);
	float s = sin(angle);
	
	mat4 m = mat4(1.0);
	
	m[0][0] = c;
	m[0][1] = s;
	m[1][1] = c;
	m[1][0] = -s;
	
	texCoord = vTexCoord;
	gl_Position = m * vPos;
}