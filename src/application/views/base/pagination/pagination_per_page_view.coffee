#Admin.Base.Views.PaginationPerPageView = Ember.View.extend
#  tagName: "button"
#  classNames: ["btn btn-default"]
#  attributeBindings: ["type"]
#  classNameBindings: ["isActive:active"]
#
#  click: ->
#    unless @get('isActive')
#      @get('controller').send("changePerPage", @get('count'))
#
#  isActive:(->
#    @get('controller.perPage') == @get('count')
#  ).property('controller.perPage')