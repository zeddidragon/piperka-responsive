filename = ARGV.first
contents = File.read filename

contents.gsub! /\/\/REQUIRE (.*) REQUIRE\/\// do |a, b, c, d|
  # gsub is stupid, this is how you get capture groups:
  File.read(Regexp.last_match[1])
end

File.write filename.sub('.zimpl', ''), contents
