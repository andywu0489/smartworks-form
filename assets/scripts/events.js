const onCancel = () => {
  event.preventDefault()
  $('form').trigger('reset')
  $('.inputs').css('border', '2px solid rgb(224, 224, 224)')
  $('.error-msg').text('')
  console.log('cancel')
}

const validateTitle = (title) => {
  $('#position-title-msg').text('')
  if (title === '') {
    $(() => {
      $('#position-title-msg').text('Position Title is required.')
      $('#title').css('border', '2px solid red')
      // $('#title').css('outline', '2px solid red')
      // $('#title').css('border-color', 'red')
      // $('#title').css('box-shadow', '0 0 5px red')
    })
  } else {
    $(() => {
      $('#title').css('border', '2px solid rgb(224, 224, 224)')
      // $('#title').css('outline', '1px solid rgb(51, 153, 255)')
      // $('#title:focus').css('outline', 'none')
      // $('#title:focus').css('border-color', 'rgb(51, 153, 255)')
      // $('#title').css('border-color', 'rgb(51, 153, 255)')
      // $('#title').css('box-shadow', 'none')
      // $('#title').focus($('#title').css('box-shadow', '0 0 5px blue'))
      // $('#title').css('outline', 'none')
    })
  }
}

const validateLocation = (location) => {
  $('#position-location-msg').text('')
  if (location === '') {
    $(() => {
      $('#position-location-msg').text('Position Location is required.')
      $('#location').css('border', '2px solid red')
      // $('#location').css('box-shadow', '0 0 5px red')
    })
  } else {
    $(() => {
      $('#location').css('border', '2px solid rgb(224, 224, 224)')
    })
  }
}

const validateDepartment = (department) => {
  $('#department-msg').text('')
  if (department === '') {
    $('#department-msg').text('Department Title is required.')
    $('#department').css('border', '2px solid red')
  } else {
    $(() => {
      $('#department').css('border', '2px solid rgb(224, 224, 224)')
    })
  }
}

const validateComment = (comment) => {
  $('#comment-msg').text('')
  if (comment === '') {
    $('#comment-msg').text('Comment is required.')
    $('#comment').css('border', '2px solid red')
  } else ($('#comment').css('border', '2px solid rgb(224, 224, 224)'))
}

const clearForm = (title, location, department, comment) => {
  if (
    title !== '' && location !== '' && department !== '' && comment !== '') {
    $('form').trigger('reset')
  }
}

const validateForm = (title, location, department, comment) => {
  validateTitle(title)
  validateLocation(location)
  validateDepartment(department)
  validateComment(comment)
}

const save = () => {
  event.preventDefault()
  const title = document.forms['form']['title'].value
  const location = document.forms['form']['location'].value
  const department = document.forms['form']['department'].value
  const comment = document.forms['form']['comment'].value
  validateForm(title, location, department, comment)
  clearForm(title, location, department, comment)
}

const next = () => {
  event.preventDefault()
  const title = document.forms['form']['title'].value
  const location = document.forms['form']['location'].value
  const department = document.forms['form']['department'].value
  const comment = document.forms['form']['comment'].value
  validateForm(title, location, department, comment)
  clearForm(title, location, department, comment)
}

module.exports = {
  onCancel,
  save,
  next
}
