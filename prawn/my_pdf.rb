require 'prawn'

class MyPdf
  include Prawn::View

  def build
    text 'Hi there!!'
  end
end
