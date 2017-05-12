#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D uTexture;
varying vec2 texCoord;

void main() {
	gl_FragColor = texture2D(uTexture, texCoord);
}