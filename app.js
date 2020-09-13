import * as build from "./pyramid-builder.js"
import readlineSync from 'readline-sync'

function greeter() {
  console.log('##################################################')
  console.log('#              Greetings Builder!                #')
  console.log('#------------------------------------------------#')
  console.log('# What sort of pyramid would you like to create? #')
  console.log('#                                                #')
  console.log('################################################## \n')
}

function typeAndSizePicker() {
  let type = parseInt(readlineSync.question('Press [1] to build a left angled pyramid.\nPress [2] to build a right angled pyramid.\nPress [3] to build a full pyramid.\nType: '))
  let size = parseInt(readlineSync.question('How tall would you like your pyramid to be?\n Size: '))

  if (type === 1 && !isNaN(size)) {
    console.log(build.leftAngledPyramid(size))
  } else if (type === 2 && !isNaN(size)) {
    console.log(build.rightAngledPyramid(size))
  } else if (type === 3 && !isNaN(size)) {
    console.log(build.fullPyramid(size))
  } else {
    console.log('\nSomething went wrong. No wonder people argue over how the pyramids were built 🤔\nTry again:')
    typeAndSizePicker()
  }
}

function main() {
  greeter()
  typeAndSizePicker()
}

main()