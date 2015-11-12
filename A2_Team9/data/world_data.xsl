<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
	<html>
		<head>
			<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'/>
			<link rel="stylesheet" href="css/stylesheet.css"/>
		</head>
		
		<body>
			<table>
				<tr>
					<th>ID</th>
					<th>Country</th>
					<th>birth rate/1000</th>
					<th>cellphones/100</th>
					<th>children/woman</th>
					<th>eletric usage</th>
					<th>internet usage</th>
				</tr>
				<xsl:for-each select="Countries/Country">
					<tr>
						<td><xsl:value-of select ="id"/></td>
						<td><xsl:value-of select ="name"/></td>
						<td><xsl:value-of select ="birth"/></td>
						<td><xsl:value-of select ="cell"/></td>
						<td><xsl:value-of select ="children"/></td>
						<td><xsl:value-of select ="electricity"/></td>
						<td><xsl:value-of select ="internet"/></td>
					</tr>
				</xsl:for-each>
			</table>
		</body>
	</html>
</xsl:template>
</xsl:stylesheet>