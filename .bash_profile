# ~/.bash_profile
# 
# anything in this file is executed only at login, anything to happen in
# every shell should be placed in the bashrc file instead

source ~/etc/bash/run

#httpload() {
#    STAMP=`date +"%s"`;
#    echo "http://$1" > /tmp/$STAMP.http_load_temp_file
#    http_load -parallel $2 -seconds $3 /tmp/$STAMP.http_load_temp_file
#    rm -f /tmp/$STAMP.http_load_temp_file
#}

##
# Your previous /Users/Carlo/.bash_profile file was backed up as /Users/Carlo/.bash_profile.macports-saved_2009-06-18_at_17:17:05
##

# MacPorts Installer addition on 2009-06-18_at_17:17:05: adding an appropriate MANPATH variable for use with MacPorts.
export MANPATH=/opt/local/share/man:$MANPATH
# Finished adapting your MANPATH environment variable for use with MacPorts.

