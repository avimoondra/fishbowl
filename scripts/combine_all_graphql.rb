# Usage
# $ cd scripts/
# $ ruby scripts/combine_all_graphql.rb

outfile_name = "upload.graphql"
File.delete(outfile_name) if File.exist?(outfile_name)
Dir["../app/**/*.graphql"].each do |file_name|
  file = File.open(file_name)
  File.write(outfile_name, file.read + "\n\n", mode: "a")
  file.close
end