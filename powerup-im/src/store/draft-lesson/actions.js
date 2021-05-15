import DraftLessonService from '../../services/DraftLessonService.js'

export function fetchLesson ({ commit }) {
  return DraftLessonService.getDraft().then(response => {
    commit('LOAD', response.data)
  })
}
