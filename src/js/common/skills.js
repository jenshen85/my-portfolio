import {scrollTop, getCoords} from '../lib/utils';

let contr = document.querySelector('.skills__list');
const front = document.querySelector('.front .skills__img');
const back = document.querySelector('.back .skills__img');
const workFl = document.querySelector('.workfl .skills__img');

class Skill {
  constructor(width, height, container, percent, title) {
    this.svgns = 'http://www.w3.org/2000/svg';
    this.svg = document.createElementNS(this.svgns, 'svg');
    this.width = width;
    this.height = height;
    this.radius = this.width / 3;
    this.percent = percent;
    this.strokeDasharray = 2 * Math.PI * this.radius;

    this.svg.setAttribute('width', this.width);
    this.svg.setAttribute('height', this.height);
    this.svg.setAttribute('viewBox', `0 0 ${this.width} ${this.height}`);

    this.baseCircle = this.createCircle('#1bb696', true);
    this.bgCircle = this.createCircle('#ccc');
    this.add(container, title);
  }

  createCircle(color, isBase = false) {
    const circle = document.createElementNS(this.svgns, 'circle');
    const cx = this.width / 2;
    const cy = this.height / 2;
    circle.setAttribute('cx', cx);
    circle.setAttribute('cy', cy);
    circle.setAttribute('r', this.radius);
    circle.setAttribute('fill', 'none');
    circle.setAttribute('stroke', color);
    circle.setAttribute('stroke-width', '15');
    if (isBase) {
      circle.setAttribute('transform', `rotate(-90 ${cx} ${cy})`);
      circle.setAttribute('stroke-dasharray', this.strokeDasharray);
      circle.setAttribute('stroke-dashoffset', this.strokeDasharray);
    }
    return circle;
  }

  add(container, title) {
    let homeDiv = document.createElement('div');
    homeDiv.className = 'skills__img-item'
    let div = document.createElement('div');
    div.className = 'skills__img-title';
    div.textContent = title;
    this.svg.appendChild(this.bgCircle);
    this.svg.appendChild(this.baseCircle);
    homeDiv.appendChild(this.svg)
    homeDiv.appendChild(div)
    container.appendChild(homeDiv);
    return this;
  }

  draw(progress) {
    this.baseCircle.setAttribute(
      'stroke-dashoffset',
      (1 - progress * this.percent) * this.strokeDasharray
    );
  }
}

if(front && back && workFl) {
  const skillHtml = new Skill(150, 150, front, 0.95, 'Html');
  const skillCss = new Skill(150, 150, front, 0.75, 'Css');
  const skillJs = new Skill(150, 150, front, 0.85, 'Js');

  const skillPSql = new Skill(150, 150, back, 0.45, 'Postgre Sql');
  const skillNode = new Skill(150, 150, back, 0.75, 'Node & Npm');
  const skillMongo = new Skill(150, 150, back, 0.75, 'MongoDB');

  const skillGulp = new Skill(150, 150, workFl, 0.95, 'Gulp');
  const skillGit = new Skill(150, 150, workFl, 0.75, 'Git');
  const skillWebpack = new Skill(150, 150, workFl, 0.45, 'Webpack');

  let offAnim = {};
  let heightList = ()=> Math.floor(contr.scrollHeight / 3);

  window.addEventListener('scroll', ()=> {

    if((window.pageYOffset || document.documentElement.scrollTop) === 0) {
      for(let key in offAnim) {
        offAnim[key] = false;
      }
    }

    if(scrollTop > (getCoords(front).top + heightList()) && !offAnim.front) {
      animate({
        duration: 700,
        timing: function(timeFraction) {
          return timeFraction;
        },
        draw: function(progress) {
          skillHtml.draw(progress);
          skillCss.draw(progress);
          skillJs.draw(progress);
        }
      })
      offAnim.front = true;
    }

    if(scrollTop > (getCoords(back).top + heightList()) && !offAnim.back) {
      animate({
        duration: 700,
        timing: function(timeFraction) {
          return timeFraction;
        },
        draw: function(progress) {
          skillPSql.draw(progress);
          skillNode.draw(progress);
          skillMongo.draw(progress);
        }
      })
      offAnim.back = true;
    }
    
    if(scrollTop > (getCoords(workFl).top + heightList()) && !offAnim.workfl) {
      animate({
        duration: 700,
        timing: function(timeFraction) {
          return timeFraction;
        },
        draw: function(progress) {
          skillGulp.draw(progress);
          skillGit.draw(progress);
          skillWebpack.draw(progress);
        }
      })
      offAnim.workfl = true;
    }
  })


}



function animate(options) {
  let start = performance.now();

  requestAnimationFrame(function _animate(time) {
    let timeFraction = (time - start) / options.duration;
    if (timeFraction > 1) timeFraction = 1;
    let progress = options.timing(timeFraction);
    options.draw(progress);
    if (timeFraction < 1) {
      requestAnimationFrame(_animate);
    }
  });
}

