require_relative 'prawn/my_pdf'
pdf = MyPdf.new
pdf.build
pdf.render_file 'output/my_pdf.pdf'
