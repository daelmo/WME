<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
	<html>
		<head>
			<title>WME Ü1 Gruppe 9</title>
			<meta charset="UTF-8"/>
			<meta name="author" content="Gruppe 9"/>
			<meta name="description" content=""/>
			<meta name="keywords" content="Web- und Multimedia, Übung"/>
			<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'/>
			<link rel="stylesheet" href="css/stylesheet.css"/>
		</head>
		
		<body>
			<header>
				<nav>
					<div><a href="#"><img src="data/world_data_logo_v1.png" alt=""/></a></div>
					<ul>
						<li><a href="#"><i class="fa fa-list-ul"></i> A1 - Table</a></li>
						<li><a href="parse.php"><i class="fa fa-list-ul"></i> A2 - Parse</a></li>
						<li><a href="save.php"><i class="fa fa-list-ul"></i> A2 - Save</a></li>
						<li><a href="print.php"><i class="fa fa-list-ul"></i> A2 - Print</a></li>
						<li><a href="#"><i class="fa fa-list-ul"></i> A3 - REST</a></li>
						<li><a href="#"><i class="fa fa-list-ul"></i> A4 - Vis</a></li>
					</ul>
					<div onclick="setMenuVisible()"><i class="fa fa-list-ul" ></i></div>
				</nav>
			</header> 
			
			<article>
				<h1>World Data Overview ...</h1>
				
				<section>
				<div class="showhide">
                    Show/Hide: 
                    <a href="javascript:setInvisibleColumn(3);" onclick="">birth rate</a> | 
                    <a href="javascript:setInvisibleColumn(4);">cellphones</a> | 
                    <a href="javascript:setInvisibleColumn(5);">children/woman</a> | 
                    <a href="javascript:setInvisibleColumn(6);">electric usage</a> | 
                    <a href="javascript:setInvisibleColumn(7);">internet usage</a>
                </div>
				
				<table>
					<colgroup> <col id="c1"/><col id="c2"/><col id="c3"/><col id="c4"/><col id="c5"/><col id="c6"/><col id="c7"/></colgroup>
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
				</section>
			</article>
	
		</body>
	</html>
</xsl:template>
</xsl:stylesheet>